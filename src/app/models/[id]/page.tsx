export default function Car({params}:{params: {id: string}}) {
    return (
      <div>
        Car {params.id}
      </div>
    );
  }
  