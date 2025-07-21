import React from "react";
import styled from "@emotion/styled";
import { Edit, Trash2 } from "lucide-react";
const Container = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  ${(props) => props.theme.space.md} ${(props) => props.theme.space.lg};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  border: 1px solid #ddd;
`;
const Info = styled.div`
  flex: 1;
`;
const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const IconButton = styled.button`
  cursor: pointer;
  padding: 0.4rem;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.accent[500]};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.colors.accent[700]};
  }
  &:last-of-type {
    background-color: ${(props) => props.theme.colors.error[500]};
    &:hover {
      background-color: ${(props) => props.theme.colors.error[700]};
    }
  }
`;
const SongItem = ({ song, onEdit, onDelete }) => {
  return (
    <Container>
      <Info>
        <h3>{song.title}</h3>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
          }}
        >
          <div>{song.artist} </div> <div>{song.album} </div>
          <div>{song.year}</div>
          <div>{song.genre} </div>
        </div>
      </Info>{" "}
      <Buttons>
        {" "}
        <IconButton onClick={() => onEdit(song)} aria-label="Edit song">
          {" "}
          <Edit size={20} />{" "}
        </IconButton>{" "}
        <IconButton onClick={() => onDelete(song.id)} aria-label="Delete song">
          {" "}
          <Trash2 size={20} />{" "}
        </IconButton>{" "}
      </Buttons>{" "}
    </Container>
  );
};
export default SongItem;
