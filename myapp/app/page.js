import Featured from '@/components/Featured/Featured'
import Gallery from '@/components/Gallery/Gallery'
import Hero from '@/components/Hero/Hero'
import Mission from '@/components/Mission/Mission'
import Treats from '@/components/Treats/Treats'

export default function Home() {
  return (
    <main>
     <Hero />
     <Featured />
     <Treats />
     <Mission />
     <Gallery />
    </main>
  )
}
