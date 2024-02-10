import styles from "./page.module.css";
import Button from './_components/Button';
import Image from "next/image";

const getData = async() => {
  const res = await fetch('https://api.thecatapi.com/v1/images/search?has_breeds=1')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
};

export default async function Home() {
  const data = await getData()
  return (
    <main className={styles.main}>
      <section className={styles.sidebar}>
        <h1>Cats</h1>
      </section>
      <section className={styles.goto}>
        <div>
          <Image src={data[0].url} alt="random cat" height={data[0].height} width={data[0].width} />
          <Button id={data[0].id}/>
        </div>
      </section>
    </main>
  );
}
