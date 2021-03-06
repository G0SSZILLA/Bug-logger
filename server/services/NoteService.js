import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class NoteService {

    async getNotesByBugId(id, email) {
        return await dbContext.Notes.find({ creatorEmail: email, bugId: id }).populate('creator', 'name picture')

    }

    async getAll(userEmail) {
        return await dbContext.Notes.find({ creatorEmail: userEmail }).populate('creator', 'name picture')
    }

    async getById(id, userEmail) {
        let data = await dbContext.Notes.findOne({ _id: id, creatorEmail: userEmail })
        if (!data) {
            throw new BadRequest('Invalid ID or you do not own this board')
        }
        return data
    }

    async create(rawData) {
        let bug = await dbContext.Bugs.findById(rawData.bugId)
            // @ts-ignore
        if (bug.closed) {
            throw new BadRequest('This bug is closed cant add a note.')
        }
        let data = await dbContext.Notes.create(rawData)
        return data
    }

    async edit(id, userEmail, update) {
        let data = await dbContext.Notes.findByIdAndUpdate({ _id: id, creatorEmail: userEmail }, update, { new: true })
        if (!data) {
            throw new BadRequest('Invalid ID or you do not own this board')
        }
        return data
    }
    async delete(id) {
        let data = await dbContext.Notes.findByIdAndRemove({ _id: id })
        if (!data) {
            throw new BadRequest('Invalid ID or you do not own this board')
        }
    }

    async deleteNoteByBugId(id, userEmail) {
        let data = await dbContext.Notes.findByIdAndRemove({ _id: id, creatorEmail: userEmail })
        if (!data) {
            throw new BadRequest('Invalid ID or you do not own this board')
        }
    }

}

export const noteService = new NoteService()