import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import { SaveIcon, XIcon } from "lucide-react";
import { createSong, updateSong } from "../store/songSlice";
const FormContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.shadows.medium};
  background-color: ${(props) => props.theme.colors.backgroundAlt};
  overflow: hidden;
`;

const FormHeader = styled.div`
  padding: ${(props) => props.theme.space.md} ${(props) => props.theme.space.lg};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

const FormTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  font-weight: 600;
  margin: 0;
  color: ${(props) => props.theme.colors.textStrong};
`;

const Form = styled.form`
  padding: ${(props) => props.theme.space.lg};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space.md};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: 500;
  margin-bottom: ${(props) => props.theme.space.xs};
  color: ${(props) => props.theme.colors.text};
`;

const Input = styled.input`
  width: 100%;
  padding: ${(props) => props.theme.space.xs};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.1);
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.disabledBg};
    cursor: not-allowed;
  }
`;

const ErrorText = styled.div`
  color: ${(props) => props.theme.colors.error[500]};
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-top: ${(props) => props.theme.space.xs};
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${(props) => props.theme.space.md};
  margin-top: ${(props) => props.theme.space.lg};
`;

const Button = styled.button`
  padding: ${(props) => props.theme.space.sm} ${(props) => props.theme.space.md};
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition:
    background-color 0.2s,
    color 0.2s;
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space.xs};
`;

const CancelButton = styled(Button)`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.text};
  &:hover {
    background-color: ${(props) => props.theme.colors.error[400]};
  }
`;

const SubmitButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary[800]};
  border: none;
  color: white;
  &:hover {
    background-color: ${(props) => props.theme.colors.accent[700]};
  }
  &:disabled {
    background-color: ${(props) => props.theme.colors.disabledBg};
    cursor: not-allowed;
  }
`;
// const FormContainer = styled.div`
//   border-radius: 8px;
//   box-shadow: ${(props) => props.theme.shadows.medium};
//   overflow: hidden;
// `;
// const FormHeader = styled.div`
//   padding: ${(props) => props.theme.space.md} ${(props) => props.theme.space.lg};
//   border-bottom: 1px solid ${(props) => props.theme.colors.border};
// `;
// const FormTitle = styled.h2`
//   font-size: ${(props) => props.theme.fontSizes.xlarge};
//   font-weight: 600;
//   margin: 0;
// `;
// const Form = styled.form`
//   padding: ${(props) => props.theme.space.lg};
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
// const FormGroup = styled.div`
//   margin-bottom: ${(props) => props.theme.space.md};
// `;
// const Label = styled.label`
//   display: block;
//   font-size: ${(props) => props.theme.fontSizes.small};
//   font-weight: 500;
//   margin-bottom: ${(props) => props.theme.space.xs};
//   color: ${(props) => props.theme.colors.text};
// `;
// const Input = styled.input`
//   width: 50em;
//   padding: ${(props) => props.theme.space.sm};
//   border: 1px solid ${(props) => props.theme.colors.border};
//   border-radius: 4px;
//   font-size: ${(props) => props.theme.fontSizes.medium};
//   transition: border-color 0.2s;
//   &:focus {
//     outline: none;
//     border-color: ${(props) => props.theme.colors.primary};
//     box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.1);
//   }
//   &:disabled {
//     background-color: ${(props) => props.theme.colors.background};
//     cursor: not-allowed;
//   }
// `;
// const ErrorText = styled.div`
//   color: ${(props) => props.theme.colors.error};
//   font-size: ${(props) => props.theme.fontSizes.small};
//   margin-top: ${(props) => props.theme.space.xs};
// `;
// const ButtonGroup = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   gap: ${(props) => props.theme.space.md};
//   margin-top: ${(props) => props.theme.space.lg};
// `;
// const Button = styled.button`
//   padding: ${(props) => props.theme.space.sm} ${(props) => props.theme.space.lg};
//   border-radius: 4px;
//   font-weight: 500;
//   cursor: pointer;
//   transition: all 0.2s;
//   display: flex;
//   align-items: center;
//   gap: ${(props) => props.theme.space.xs};
// `;
// const CancelButton = styled(Button)`
//   background-color: transparent;
//   border: 1px solid ${(props) => props.theme.colors.border};
//   color: ${(props) => props.theme.colors.text};
//   &:hover {
//     background-color: ${(props) => props.theme.colors.background};
//   }
// `;
// const SubmitButton = styled(Button)`
//   background-color: ${(props) => props.theme.colors.primary};
//   border: none;
//   color: white;
//   &:hover {
//     background-color: ${(props) => props.theme.colors.secondary};
//   }
//   &:disabled {
//     background-color: ${(props) => props.theme.colors.textLight};
//     cursor: not-allowed;
//   }
// `;
const NewSongForm = ({ song, onCancel, onSuccess }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.songs);
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    album: "",
    year: new Date().getFullYear(),
    genre: "",
  });
  const [formErrors, setFormErrors] = useState({});
  // Initialize form with song data if editing
  useEffect(() => {
    if (song) {
      setFormData({
        title: song.title,
        artist: song.artist,
        album: song.album,
        year: song.year,
        genre: song.genre || "",
      });
    }
  }, [song]);
  const validateForm = () => {
    const errors = {};
    if (!formData.title.trim()) {
      errors.title = "Title is required";
    }
    if (!formData.artist.trim()) {
      errors.artist = "Artist is required";
    }
    if (!formData.album.trim()) {
      errors.album = "Album is required";
    }
    if (!formData.year) {
      errors.year = "Year is required";
    } else if (
      formData.year < 1900 ||
      formData.year > new Date().getFullYear() + 1
    ) {
      errors.year = `Year must be between 1900 and ${new Date().getFullYear() + 1}`;
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "year" ? parseInt(value) || "" : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    if (song) {
      // Update existing song
      dispatch(
        updateSong({
          id: song.id,
          songData: formData,
        }),
      );
    } else {
      // Create new song
      console.log(formData);
      dispatch(createSong(formData));
    }
    // If successful, notify parent component
    if (!error) {
      onSuccess();
    }
  };
  return (
    <FormContainer>
      <FormHeader>
        <FormTitle>{song ? "Edit Song" : "Add New Song"}</FormTitle>
      </FormHeader>
      <Form onSubmit={handleSubmit}>
        {error && <ErrorText>{error}</ErrorText>}
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            disabled={loading}
          />
          {formErrors.title && <ErrorText>{formErrors.title}</ErrorText>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="artist">Artist</Label>
          <Input
            type="text"
            id="artist"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
            disabled={loading}
          />
          {formErrors.artist && <ErrorText>{formErrors.artist}</ErrorText>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="album">Album</Label>
          <Input
            type="text"
            id="album"
            name="album"
            value={formData.album}
            onChange={handleChange}
            disabled={loading}
          />
          {formErrors.album && <ErrorText>{formErrors.album}</ErrorText>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="year">Year</Label>
          <Input
            type="number"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            min="1900"
            max={new Date().getFullYear() + 1}
            disabled={loading}
          />
          {formErrors.year && <ErrorText>{formErrors.year}</ErrorText>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="genre">Genre (optional)</Label>
          <Input
            type="text"
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            disabled={loading}
          />
        </FormGroup>
        <ButtonGroup>
          <CancelButton type="button" onClick={onCancel} disabled={loading}>
            <XIcon size={16} />
            Cancel
          </CancelButton>
          <SubmitButton type="submit" disabled={loading}>
            <SaveIcon size={16} />
            {loading ? "Saving..." : song ? "Update Song" : "Add Song"}
          </SubmitButton>
        </ButtonGroup>
      </Form>
    </FormContainer>
  );
};
export default NewSongForm;
