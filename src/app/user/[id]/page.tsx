export const dynamicParams = false;

type UserProps = {
  id: string;
};

export default function User({ params }: { params: UserProps }) {
  const { id } = params;
  return (
    <table>
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>AGE</th>
        <th>WEIGHT</th>
      </tr>
      <tr>
        <td>{id}</td>
        <td>{}</td>
        <td>{}</td>
        <td>{}</td>
      </tr>
    </table>
  );
}

export const generateStaticParams = async (): Promise<UserProps[]> => {
  const Users = [
    {
      id: "1",
    },
    {
      id: "3",
    },
    {
      id: "5",
    },
    {
      id: "7",
    },
  ];
  return Users;
};
