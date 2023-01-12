import { MagnifyingGlass } from "phosphor-react";
import { SearchContainer } from "./SearchForm.styled";

export function SearchForm() {
  return (
    <SearchContainer>
      <input type="text" placeholder="Search for transactions" />
      <button type="submit"><MagnifyingGlass size={20} />Search</button>
    </SearchContainer>
  )
}
