import "./services.css";
import { VscOrganization, VscSearchFuzzy } from "react-icons/vsc";
import { GiTimeSynchronization } from "react-icons/gi";
import { CiAlarmOn } from "react-icons/ci";
import { MdOutlineManageHistory } from "react-icons/md";
import { TbDatabaseImport } from "react-icons/tb";
const Services = () => {
  const servicesData = [
    {
      title: "Organization",
      icon: VscOrganization,
      description:
        "Allow users to organize their notes into folders or categories for easy retrieval.",
    },
    {
      title: "Search and Filter",
      icon: VscSearchFuzzy,
      description:
        "Implement a robust search and filtering system to help users quickly find specific notes.",
    },
    {
      title: "Synchronization",
      icon: GiTimeSynchronization,
      description:
        "Offer synchronization across devices, ensuring that users can access their notes from anywhere.",
    },
    {
      title: "Reminders",
      icon: CiAlarmOn,
      description:
        "Allow users to set reminders and alarms for specific notes or tasks.",
    },
    {
      title: "Version History",
      icon: MdOutlineManageHistory,
      description:
        "Maintain a version history of notes to help users restore previous versions if needed.",
    },
    {
      title: "Import and Export",
      icon: TbDatabaseImport,
      description:
        "Allow users to import notes from other apps and export their notes for backup.",
    },
  ];

  return (
    <div className="services" id="services">
      <h1 className="services-title">Our Feature</h1>
      <div className="service-list">
        {servicesData.map((service, index) => (
          <div className="service" key={index}>
            <i>
              <service.icon />
            </i>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
