import { Team } from "../components/Team";


const team = [
    {
      id:1,
      name: "Samantha Koch",
      role: "Chief Excecutive Officer",
      bio: "10+ years in tax compliance and dispute resolution with SARS.",
      imgUrl: "/Samantha_Koch.jpg",
    }
    , {
      id:2,
      name: "Lorinda Deysel",
      role: "Chief Financial Officer",
      bio: "Extensive experience in Business Operations",
      imageUrl: "/Lorinda_Deysel.jpg"}]
  
  
  export default function About() {
    return (
      <div className="p-4">
  
          <Team heading='The Dream Team' subheading='Tax simplified' listStyle='flex' cardStyle='' members={team}/>
  
  
  
      </div>
    );
  }
  