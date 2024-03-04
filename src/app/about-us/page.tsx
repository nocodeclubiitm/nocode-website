import { siteConfig } from "@/lib/site-config";
import ContentCard from "./_component/content-card";
import ProfileCard from "./_component/profile-card";
import Navbar from "@/components/navbar/Navbar";
import Contact from "@/components/contact/Contact";
const combinedTeamData = [...siteConfig.aboutUs.teams.heads, ...siteConfig.aboutUs.teams.leads, ...siteConfig.aboutUs.teams.Associates]
const TeamPage = () => {
  return (
    <div className="bg-[#0E0E26] text-white">
      <Navbar/>
      <div className="container">
        <div className=" container text-center h-screen flex flex-col justify-center items-center ">
          <h1 className="text-7xl text-center font-bold mb-5">
            {siteConfig.aboutUs.titlle}
          </h1>
          <p className="text-2xl md:text-4xl ">{siteConfig.aboutUs.subTitle}</p>
        </div>
        {/* Content section */}
        <div className="">
          {siteConfig.aboutUs.content.map((item, index) => (
            <ContentCard
              key={item.title}
              title={item.title}
              subTitle={item.subTitle}
              description={item.description}
              index={index}
            />
          ))}
        </div>
        {/* card section */}
        <div className="mt-20  text-center h-full pb-10">
          <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {combinedTeamData.map(({ name, role, image, description }) => (
              <ProfileCard
                key={name}
                name={name}
                role={role}
                image={image}
                description={description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
