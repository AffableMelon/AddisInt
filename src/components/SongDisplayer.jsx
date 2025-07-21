import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSong,
  fetchSongs,
  setNowSong,
  setPage,
} from "../store/songSlice";
import styled from "@emotion/styled";
import SongListBuild, { AddButton } from "./SongListBuild";
import { PlusIcon } from "lucide-react";
import NewSongForm from "./NewSongForm";
import Pagination from "./PageChange";

const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: ${(props) => props.theme.space.lg};
`;
const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom ${(props) => {
  props.theme.space.xl;
}}
text-align: left;
`;
const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) => props.theme.space.sm};
`;
const Subtitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.textLight};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space.xl};
`;
const ListSection = styled.section`
  flex: 1;
`;
const FormSection = styled.section`
  flex: 1;
`;

const SongDisplayer = () => {
  const dispatch = useDispatch();
  const [showform, setFormVisibility] = useState(false);
  const { songs, currentSong, loading, error, pagination } = useSelector(
    (state) => state.songs,
  );
  const handleNewSong = () => {
    dispatch(setNowSong(null));
    setFormVisibility(true);
  };
  const handleCancleNewSong = () => {
    setFormVisibility(false);
  };
  const handleFormSuccess = () => {
    setFormVisibility(false);
    dispatch(
      fetchSongs({
        page: pagination.currentPage,
        limit: pagination.itemsPerPage,
      }),
    );
  };
  const handleEditSong = (song) => {
    dispatch(setNowSong(song));
    setFormVisibility(true);
  };
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this song?")) {
      dispatch(deleteSong(id));
    }
  };
  const handlePageChange = (page) => {
    dispatch(fetchSongs({ page, limit: pagination.itemsPerPage }));
    dispatch(setPage(page));
  };
  useEffect(() => {
    dispatch(
      fetchSongs({
        page: pagination.currentPage,
        limit: pagination.itemsPerPage,
      }),
    );
  }, [dispatch, pagination.currentPage, pagination.itemsPerPage]);

  console.log(songs);
  return (
    <Container>
      <Header>
        <div>
          <Title>My Songs</Title>
          <Subtitle>These are some of the songs I like</Subtitle>
        </div>
        <AddButton onClick={handleNewSong}>
          <PlusIcon size={16} /> Add Song
        </AddButton>
      </Header>
      <ContentWrapper>
        <ListSection>
          <SongListBuild
            songs={songs}
            onEdit={handleEditSong}
            error={error}
            loading={loading}
            onDel={handleDelete}
          ></SongListBuild>
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            onPageChange={handlePageChange}
          />
        </ListSection>
        {showform && (
          <FormSection>
            <NewSongForm
              song={currentSong}
              onCancel={handleCancleNewSong}
              onSuccess={handleFormSuccess}
            ></NewSongForm>
          </FormSection>
        )}
      </ContentWrapper>
    </Container>
  );
};

export default SongDisplayer;
