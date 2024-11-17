"use client"
import { useEffect, useState } from "react";
import { fetchRandomUsers, RandomUser } from "../services/randomUser";

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState<RandomUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getTeamMembers = async () => {
      try {
        const members = await fetchRandomUsers(6); 
        setTeamMembers(members);
      } catch (err) {
        setError("No data.");
      } finally {
        setLoading(false);
      }
    };

    getTeamMembers();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <section className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8"> Meet Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 text-center"
          >
            <img
              src={member.picture.large}
              alt={`${member.name.first} ${member.name.last}`}
              className="rounded-full mx-auto mb-4 w-24 h-24"
            />
            <h2 className="text-lg font-semibold">
              {member.name.first} {member.name.last}
            </h2>
            <p className="text-sm text-gray-500">{member.email}</p>
            <p className="text-sm text-gray-500">{member.phone}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
