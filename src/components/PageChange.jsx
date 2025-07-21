import React from "react";
import styled from "@emotion/styled";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 1.5rem;
`;

const Button = styled.button`
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 8px;
  font-weight: ${(props) => (props.active ? "600" : "400")};
  background: ${(props) =>
    props.active ? props.theme.colors.secondary[700] : "transparent"};
  color: ${(props) => (props.active ? "#fff" : props.theme.colors.text)};
  border: 1px solid
    ${(props) =>
      props.active ? props.theme.colors.primary : props.theme.colors.border};
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;

  &:hover:not(:disabled) {
    background: ${(props) =>
      props.active
        ? props.theme.colors.primary
        : props.theme.colors.background};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Container>
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeftIcon size={16} />
      </Button>
      {pages.map((page) => (
        <Button
          key={page}
          active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Button>
      ))}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRightIcon size={16} />
      </Button>
    </Container>
  );
};

export default Pagination;
