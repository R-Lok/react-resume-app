export class Experience {
    constructor(title, institutionName, startDate, endDate, description, type) {
        this.id = crypto.randomUUID()
        this.name = title,
        this.location = institutionName,
        this.startDate = startDate,
        this.endDate = endDate,
        this.description = description,
        this.type = type
    }
}