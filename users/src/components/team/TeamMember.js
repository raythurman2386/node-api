import React from "react";
import styled from "styled-components";

const TeamMember = ({ member, handleDelete }) => {
  return (
    <TeamMemberCard>
      <h1>{member.name}</h1>
      <h2>{member.bio}</h2>
      <button>Edit</button>
      <button onClick={() => handleDelete(member.id)}>Delete</button>
    </TeamMemberCard>
  );
};

export default TeamMember;

const TeamMemberCard = styled.div`
  width: 400px;
  min-height: 250px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem;
  box-shadow: 0 10px 6px -6px #777;
  margin: 2rem auto;
  :hover {
    box-shadow: 0 10px 16px -6px #777;
    transition: 0.4s ease;
  }

  h1 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    text-align: center;
    margin: 2rem 0;
    width: 80%;
    overflow: hidden;
    text-wrap: wrap;
    word-wrap: normal;
  }

  button {
    padding: 6px 12px;
    margin-left: 10px;
    font-size: 1.4rem;
    font-weight: 500;
    width: 80%;
    border: none;
    box-shadow: 0 5px 5px #777;
    cursor: pointer;
    background-color: #333;
    color: white;
    :hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
      transition: 0.5s ease;
    }
  }
`;
