import { MagnifyingGlass, X, XCircle } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

interface SearchFormProps {
  onGetVehicles: (query: string) => void;
  onResetSearch: () => void;
}

export const SearchForm = ({
  onGetVehicles,
  onResetSearch,
}: SearchFormProps) => {
  const { register, reset, handleSubmit, watch } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  const query = watch("query");

  const handleSearchVehicles = async (data: SearchFormInputs) => {
    onGetVehicles(data.query);
  };

  const handleResetSearchAndReturnToFirstPage = () => {
    onResetSearch();
    reset();
  };

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchVehicles)}>
      <input
        type="text"
        placeholder="Busque por veículos"
        autoComplete="off"
        {...register("query")}
      />
      <button type="reset" onClick={handleResetSearchAndReturnToFirstPage}>
        <X />
      </button>
      <button type="submit" disabled={!query}>
        <MagnifyingGlass size={20} weight="bold" />
        Buscar
      </button>
    </SearchFormContainer>
  );
};
