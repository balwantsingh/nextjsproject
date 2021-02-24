import Link from 'next/link'
import Image from 'next/image'


export default function Home() {

  return (
    <div>
      <h1 class="text-3xl font-extrabold">Homepage</h1>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/product"><a>Products</a></Link></li>
        <li><Link href="/services"><a>Services</a></Link></li>
        <li><Link href="/outsourcing"><a>Outsourcing</a></Link></li>
        <li><Link href="/contact"><a>Contact Us</a></Link></li>
      </ul>
      Commodo in deserunt culpa pariatur elit ea et cupidatat non aliquip incididunt cillum. Cillum eiusmod in qui laborum duis sint nulla mollit proident adipisicing culpa commodo laborum. Est et est culpa magna duis culpa pariatur ea irure proident et. Eu laborum consectetur qui Lorem labore aliqua mollit voluptate eu. Sunt irure culpa minim adipisicing adipisicing excepteur cupidatat occaecat adipisicing eiusmod enim.

Duis voluptate fugiat nostrud deserunt amet. Ex magna dolor eu ex ullamco excepteur enim adipisicing tempor minim consectetur incididunt irure. Mollit reprehenderit ad ut mollit quis voluptate magna veniam nisi ipsum. Non in quis Lorem nostrud ipsum cupidatat in velit anim enim nulla pariatur Lorem elit. Voluptate commodo non aliquip ipsum cillum non dolore velit laboris exercitation eiusmod nisi in occaecat.

Excepteur esse officia laboris in non Lorem. Anim fugiat sunt culpa aute voluptate. Elit esse esse irure deserunt dolor laboris enim nostrud aute exercitation commodo aliquip ex. Eiusmod quis aliqua occaecat deserunt ex deserunt id sunt tempor consequat id esse mollit voluptate. Do laborum fugiat consequat et Lorem minim est Lorem commodo. Enim ad magna aliqua qui minim dolor proident.

Magna anim voluptate sunt ea elit voluptate aute elit. Exercitation dolore commodo aliqua in eiusmod irure commodo occaecat ex esse ex in laboris. Do elit cillum nisi incididunt et reprehenderit duis non elit ipsum aliquip do dolor. Culpa velit aute duis laborum velit pariatur in officia reprehenderit dolore occaecat mollit occaecat.

Adipisicing est eu nostrud aliquip. Ipsum aliquip ad pariatur cillum ea ex aliqua nostrud elit. Est incididunt incididunt tempor Lorem ullamco do deserunt non nulla in aliquip consequat. Magna est nisi incididunt irure ex aliqua eu qui ea. Qui non velit laboris aliqua aliqua nisi.

Officia consequat ullamco non excepteur velit. Magna eiusmod proident consequat id ullamco aliquip voluptate ea nostrud commodo id ullamco do. Lorem in officia deserunt est magna est dolor cillum excepteur. Enim nisi occaecat duis enim esse. Nisi cupidatat consequat irure pariatur nisi. Ex minim et tempor elit consectetur ex esse sunt in incididunt officia.

Sit velit veniam cupidatat sunt tempor non id aute anim exercitation nostrud magna. Adipisicing deserunt culpa laborum minim reprehenderit id sunt amet et nulla excepteur pariatur Lorem enim. Nulla ullamco do commodo labore incididunt ullamco nisi excepteur.

Esse laborum nisi enim amet pariatur non excepteur dolore ea amet fugiat nulla. Laboris consequat ea anim nulla aliquip sint magna veniam aliquip irure consequat veniam do adipisicing. Id ad deserunt ut enim fugiat et fugiat. Tempor eu et elit tempor est enim irure tempor Lorem.

Esse adipisicing dolore occaecat enim adipisicing culpa mollit mollit. Exercitation nisi labore fugiat occaecat laborum id velit mollit occaecat officia eu officia. Ullamco esse aliqua est consequat ad aliquip nisi ut. Et qui nulla mollit qui excepteur ex. Est consequat quis consequat culpa aliqua est. Commodo enim esse commodo dolore excepteur duis. Mollit velit nisi laborum esse nulla.

Consequat enim adipisicing officia pariatur velit duis Lorem. Excepteur aute in duis duis ipsum. Laboris enim dolor cillum eiusmod est elit sit laboris minim quis incididunt.
      <Image src="/images/about.jpeg" height={400} width={400} />

      <style jsx> {`
      h2 {
        color:red;
      }
      `}

      </style>
      <h2>I have styled JSX</h2>
      <h3>I have global CSS</h3>
    </div>
  )
}