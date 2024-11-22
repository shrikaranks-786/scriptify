import { integer, jsonb, pgPolicy, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { prices, subscriptionStatus, users } from "../../../migrations/schema";
import { boolean, foreignKey } from "drizzle-orm/mysql-core";

export const workspace = pgTable("workspace", {
    id : uuid("id").defaultRandom().primaryKey().notNull(),
    createdat : timestamp("created_at",
        {withTimezone : true,
        mode : "string"}
    ),
    workspaceowner : uuid("workspaceowner").notNull(),
    title : text("title").notNull(),
    iconid : text("icon_id").notNull(),
    data : text("data"),
    intrash : text("in_trash"),
    logo : text("logo"),
    bannerurl : text("banner_url"),
})

export const folders = pgTable("folders",{
    id : uuid("id").defaultRandom().primaryKey().notNull(),
    createdat : timestamp("created_at",
        {withTimezone : true,
        mode : "string"}
    ),
    title : text("title").notNull(),
    iconid : text("icon_id").notNull(),
    data : text("data"),
    intrash : text("in_trash"),
    logo : text("logo"),
    bannerurl : text("banner_url"),
    workspaceid : uuid("workspace_id").references(()=> workspace.id , {
        onDelete : "cascade"
    })
})

export const files = pgTable("files",{
    id : uuid("id").defaultRandom().primaryKey().notNull(),
    createdat : timestamp("created_at",
        {withTimezone : true,
        mode : "string"}
    ),
    title : text("title").notNull(),
    iconid : text("icon_id").notNull(),
    data : text("data"),
    intrash : text("in_trash"),
    logo : text("logo"),
    bannerurl : text("banner_url"),
    workspaceid : uuid("workspace_id").references(()=> workspace.id , {
        onDelete : "cascade"
    }),
    folderid : uuid("folder_id").references(()=> folders.id , {
        onDelete : "cascade"
    })
})
