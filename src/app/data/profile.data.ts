import { environment } from "../../environments/environment.development";
import { ProfileSchema } from "./schema/profile.schema";

const profileData: ProfileSchema = {
  name: 'Marc Kevin Flores',
  bio: 'Enthusiastic software engineer from Philippines',
  resumeLink: `${environment.url}/cv.pdf`,
  greetings: [
    'Hello, world',
    'Kumusta, mundo'
  ]

}
export default profileData
