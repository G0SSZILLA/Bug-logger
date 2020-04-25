import express from "express";
import BaseController from "../utils/BaseController";
import auth0provider from "@bcwdev/auth0provider";
import { noteService } from "../services/NoteService";


export class NoteController extends BaseController {
    constructor() {
        super("api/notes");
        this.router
            .use(auth0provider.getAuthorizedUserInfo)
            .get("", this.getAll)
            .get("/:id", this.getById)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete)

    }

    async getAll(req, res, next) {
        try {
            let data = await noteService.getAll(req.user.email);
            return res.send(data);
        } catch (error) {
            next(error);
        }
    }


    async getById(req, res, next) {
        try {
            let data = await noteService.getById(req.params.id, req.userInfo.email);
            return res.send(data);
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            req.body.creatorEmail = req.userInfo.email;
            let data = await noteService.create(req.body);
            return res.status(201).send(data);
        } catch (error) {
            next(error);
        }
    }

    async edit(req, res, next) {
        try {
            let data = await noteService.edit(
                req.params.id,
                req.userInfo.email,
                req.body
            );
            return res.send(data);
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            await noteService.delete(req.params.id);
            return res.status(204).send("Successfully deleted");
        } catch (error) {
            next(error);
        }
    }

}