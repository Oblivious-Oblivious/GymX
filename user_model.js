const database = database();

class Link {
    src: String;
}

const user_schema = new Schema({
    mail: String,
    name: String,
    pass: database.encryped_password,
    rantevou: [String],
    profile_image: Link,
});