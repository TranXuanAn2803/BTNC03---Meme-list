import "./styles.css";

export default function Image({ id, name, url }) {
    console.log(id, name, url )
  return (
    <div key={id} class="gallery">
        <a href={url}>
            <img src={url} alt={name} />
        </a>
        <div class="desc">{name}</div>
    </div>

  );
}