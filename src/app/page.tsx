export default function Home() {
  return (
    <div className="mx-5">
      <div className="bg-gray-300 my-2 rounded-md">
        <h1>Lista de usuários</h1>
        <div>
          <button className="p-2 bg-green-300 rounded-md my-2 mx-2">Adicionar</button>

          <ul>
            <li>User 1</li>
            <li>User 2</li>
            <li>User 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}