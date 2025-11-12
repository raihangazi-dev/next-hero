import Link from "next/link";

export default function ServicesPage() {
  const data = [
    {
      _id: "123",
      service_name: "Tech Fix",
      service_image: "/service_image_1.png",
      service_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic placeat reprehenderit architecto recusandae exercitationem minus eaque temporibus omnis nihil repellat!",
    },
    {
      _id: "456",
      service_name: "Fit Life",
      service_image: "/service_image_1.png",
      service_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic placeat reprehenderit architecto recusandae exercitationem minus eaque temporibus omnis nihil repellat!",
    },
    {
      _id: "789",
      service_name: "Eco Clean",
      service_image: "/service_image_1.png",
      service_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic placeat reprehenderit architecto recusandae exercitationem minus eaque temporibus omnis nihil repellat!",
    },
  ];
  return (
    <div>
      <p>Services Page</p>
      {
        data.map(dt => {
            return <div key={dt._id}>
                    <img src={dt.service_image} className="h-40 w-40 bg-gray-200 outline-0 border-0" alt="" />
                    <p>{dt.service_name}</p>
            </div>
        })
      }
    </div>
  );
}
