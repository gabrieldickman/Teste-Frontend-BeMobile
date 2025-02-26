const formatData = (data: string) => {
  return new Date(data).toLocaleDateString("pt-BR");
};

export default formatData;