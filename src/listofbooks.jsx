function DisplayBooks()
{

    const books = ["Java", "C++", "VB.net"]
    return (
<>

<ul>
        { books.map ( (item,index) =>
        (
            <li key={index}> {item}</li>
        )
    )
        }
</ul>

</>

    )
}

export default DisplayBooks;