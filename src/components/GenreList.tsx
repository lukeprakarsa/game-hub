import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return null;

  if (isLoading)
    return (
      <List>
        {skeletons.map((s) => (
          <ListItem key={s} paddingY="5px">
            <HStack>
              <Skeleton boxSize="32px" borderRadius={8} />
            </HStack>
          </ListItem>
        ))}
      </List>
    );

  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(g.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Button
              fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(g)}
              fontSize="lg"
              variant="link"
            >
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
