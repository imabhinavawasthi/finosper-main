import { useEffect } from 'react';
import './Sidebar.css';
import TabsApp from "../../parts/tabs/TabsApp"

function SideBar() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');
                if (entry.intersectionRatio > 0) {
                    document.querySelector(`.section-nav .list-item a[href="#${id}"]`).parentElement.classList.add('active');
                } else {
                    document.querySelector(`.section-nav .list-item a[href="#${id}"]`).parentElement.classList.remove('active');
                }
            });
        })
        document.querySelectorAll('section[id]').forEach((section) => {
            observer.observe(section);
        });
    }, [])

    return (

        <main className='whitetext mt-5 whole-container'>
            <div>
                <h1 className='st3'><strong>Course Title</strong></h1>
                <p>
                    Description
                </p>
                <section className='section-div' id="introduction">
                    <h2>Introduction</h2>
                    <p>…</p>
                </section>
                <section className='section-div' id="request-response">
                    <h2>Tips &amp; Tricks</h2>
                    <p>…</p>
                </section>
                <section id="authentication" className='section-div'>
                    <h2>Topic 1</h2>
                    <div className='ml-2 mr-2'>
                        <TabsApp tabs={[
                            {
                                id: 1,
                                tabTitle: 'DSA',
                                title: 'Title 1',
                                content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.'
                            },
                            {
                                id: 2,
                                tabTitle: 'Competitive Programming',
                                title: 'Title 2',
                                content: 'Contenido de tab 2.'
                            },
                            {
                                id: 3,
                                tabTitle: 'Web Development',
                                title: 'Title 3',
                                content: 'Contenido de tab 3.'
                            }
                        ]} />
                    </div>
                </section>
                <section id="endpoints" className='section-div'>
                    <h2>Topic 2</h2>
                    <section id="endpoints--root">
                        <h3>Subtopic</h3>
                        <p>…</p>
                    </section>
                    <section id="endpoints--cities-overview" className='section-div'>
                        <h3>Subtopic</h3>
                        <p>…</p>
                    </section>
                    <section id="endpoints--city-detail" className='section-div'>
                        <h3>Subtopic</h3>
                        <p>…</p>
                    </section>
                    <section id="endpoints--city-config" className='section-div'>
                        <h3>Subtopic</h3>
                        <p>…</p>
                    </section>
                    <section id="endpoints--city-spots-overview" className='section-div'>
                        <h3>Subtopic</h3>
                        <p>…</p>
                    </section>
                    <section id="endpoints--city-spot-detail" className='section-div'>
                        <h3>Subtopic</h3>
                        <p>…</p>
                    </section>
                    <section id="endpoints--city-icons-overview" className='section-div'>
                        <h3>Subtopic</h3>
                        <p>…</p>
                    </section>
                    <section id="endpoints--city-icon-detail" className='section-div'>
                        <h3>Subtopic</h3>
                        <p>…</p>
                    </section>
                </section>
                <section id="links" className='section-div'>
                    <h2>Topic 3</h2>
                    <p>…</p>
                </section>
                <section id="expanders" className='section-div'>
                    <h2>Topic 4</h2>
                    <p>…</p>
                </section>
                <section id="filters" className='section-div'>
                    <h2>Topic 5</h2>
                    <p>…</p>
                </section>
            </div>
            <nav class="section-nav fadeshow1">
                <ol className='list-content'>
                    <li className='list-item'>
                        <a href="#introduction">Introduction</a>
                    </li>
                    <li className='list-item'>
                        <a href="#request-response">Tips &amp; Tricks</a>
                    </li>
                    <li className='list-item'>
                        <a href="#authentication">Topic 1</a>
                    </li>
                    <li className='list-item'>
                        <a href="#endpoints">Topic 2</a>
                        <ul className='list-content'>
                            <li class="">
                                <a href="#endpoints--root">Subtopic</a>
                            </li>
                            <li className='list-item'>
                                <a href="#endpoints--cities-overview">Subtopic</a>
                            </li>
                            <li className='list-item'>
                                <a href="#endpoints--city-detail">Subtopic</a>
                            </li>
                            <li className='list-item'>
                                <a href="#endpoints--city-config">Subtopic</a>
                            </li>
                            <li className='list-item'>
                                <a href="#endpoints--city-spots-overview">Subtopic</a>
                            </li>
                            <li className='list-item'>
                                <a href="#endpoints--city-spot-detail">Subtopic</a>
                            </li>
                            <li className='list-item'>
                                <a href="#endpoints--city-icons-overview">Subtopic</a>
                            </li>
                            <li className='list-item'>
                                <a href="#endpoints--city-icon-detail">Subtopic</a>
                            </li>
                        </ul>
                    </li>
                    <li className='list-item'>
                        <a href="#links">Topic 3</a>
                    </li>
                    <li className='list-item'>
                        <a href="#expanders">Topic 4</a>
                    </li>
                    <li className='list-item'>
                        <a href="#filters">Topic 5</a>
                    </li>
                </ol>
            </nav>
        </main>

    );

}

export default SideBar;