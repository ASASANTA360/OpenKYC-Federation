import mongoose from "mongoose";

const OrganizationSchema = new mongoose.Schema(
{
name: String,
country: String,
nodeUrl: String,
publicKey: String,
status: {
type: String,
default: "active"
}
},
{
timestamps: true
}
);

export default
mongoose.models.Organization ||
mongoose.model("Organization", OrganizationSchema);