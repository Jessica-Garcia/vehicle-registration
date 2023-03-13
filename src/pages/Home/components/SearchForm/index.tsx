import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

interface SearchFormProps {
  onGetVehicles: (query?: string) => Promise<void>;
}

export const SearchForm = ({ onGetVehicles }: SearchFormProps) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  const handleSearchVehicles = async (data: SearchFormInputs) => {
    await onGetVehicles(data.query);
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
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} weight="bold" />
        Buscar
      </button>
    </SearchFormContainer>
  );
};
