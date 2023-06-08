export default function ({ params: { name } }) {
  return <div> {name.replace(/-/g, ' ')} </div>;
  
}
