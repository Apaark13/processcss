
export default function Home() {
  function Card(srcp:any) {
    return(

      <div className="card">
      <a href="/">
         <div className="card-thumbnail">
            <img src='/assets/image.jpeg' loading="lazy" alt="Explore NeoBrutalismCSS" className="card-thumbnail"/>
          </div>
          <div className="card-content">
             <div className="text-small">January 3, 2024</div>
                    <p>
                        <strong>Explore ProcessCSS: A Revolutionary library</strong>
                    </p>
                    <p>Unveil the future of NeoBrutalism with our groundbreaking approach that will transform your life.</p>
                    <p><strong>Learn More </strong></p>
             </div>
        </a>
   </div>
      )
  }
  return (
<div className="flex">
  
<Card src="/assets/image.jpeg"/>
<Card src="/assets/image.jpeg"/>
<Card src="/assets/image.jpeg"/>
                  
</div>
  )
}
