import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { Loader2Icon, PlusIcon } from "lucide-react";
import SongItem from "./Song";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
`;
const ListHeader = styled.div`
  display: flex;
  justify-content:;
  align-items: center;
  padding: ${(props) => props.theme.space.md} ${(props) => props.theme.space.lg};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space.xs};
  background-color: ${(props) => props.theme.colors.primary[800]};
  height: 32px;
  color: white;
  border: none;
  border-radius: 4px;
  padding: ${(props) => props.theme.space.sm} ${(props) => props.theme.space.md};
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.colors.accent[800]};
  }
`;

const EmptyState = styled.div`
  padding: ${(props) => props.theme.space.xl};
  text-align: center;
  color: ${(props) => props.theme.colors.textLight};
`;
const ErrorMessage = styled.div`
  padding: ${(props) => props.theme.space.md};
  margin: ${(props) => props.theme.space.md};
  background-color: ${(props) => props.theme.colors.md};
  color: ${(props) => props.theme.colors.error};
  border-radius: 4px;
  border-left: 4px solid ${(props) => props.theme.colors.error};
`;
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.space.xl};
  color: ${(props) => props.theme.colors.textLight};
`;

// box-shadow: ${(props) => props.theme.space.md} ${(props) => props.theme.space.lg}
const SongListBuild = ({ songs, loading, error, onEdit, onDel }) => {
  console.log();
  return (
    <ListContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}{" "}
      {loading ? (
        <LoadingContainer>
          {" "}
          <Loader2Icon size={24} className="animate-spin" />{" "}
          <span className="ml-2">Loading songs...</span>{" "}
        </LoadingContainer>
      ) : songs.length === 0 ? (
        <EmptyState>No songs found. Add your first song!</EmptyState>
      ) : (
        songs.map((song) => (
          <SongItem
            key={song.id}
            song={song}
            onEdit={() => onEdit(song)}
            onDelete={() => onDel(song.id)}
          />
        ))
      )}
    </ListContainer>
  );
};

export default SongListBuild;
