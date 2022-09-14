interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export default function getTypeName(types: Type[]) {
  return types[0].type.name;
}
