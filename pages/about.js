import dynamic from 'next/dynamic'

import Layout from 'components/layout'


const Nav = dynamic(() => import('components/nav'))
const ContentContainer = dynamic(() => import('components/content-container'))
const MadeBy = dynamic(() => import('components/made-by'))
const L = dynamic(() => import('components/link'))
const Header = dynamic(() => import('components/header'))
const Top = dynamic(() => import('components/top-container'))

export default function About() {

    return <Layout title="About" description="Tour of Scala is a place to learn Scala easily by solving exercises." fullScreen>
        <Top>
            <Header />
            <MadeBy />
            <ContentContainer fullscreen>
                {/* <!-- TODO: Better about ! --> */}
                <h2>How is this website made?</h2>
                <p>
                    The rendering of this website is generated by this open source project
                    on <L to="https://github.com/leobenkel/tour-of-scala">GitHub</L>.
                    If you would like to improve the design, please do. I am not a designer, as you can see.
                </p>
                <p>
                    The data being rendered is parsed from my website,
                    and more specifically from the <L to="https://leobenkel.com/category/scala/knowledge-bits/"
                    >SKB series</L>.
                </p>
                <p>
                    I post new articles on Mondays, Wednesdays and Fridays each week. This has stopped as I ran out
                    of topic to talk about but if you have more suggestions <L to="https://forms.gle/ezv3Jr6REZScXtuq9">fill this survey</L>
                </p>
                <p>You can also find the articles on <L to="https://medium.com/scala-knowledge-bits"
                >Medium</L>.</p>
                <p>If you have any comments, suggestions or feedback, make sure to message me on Discord, or LinkedIn,
                    or submit a comment on the original article on my website.</p>

                <h2>Credits</h2>
                <p>I heavily used the <L to="https://material.io/resources/icons/">material icons</L>.</p>
                <p>Huge thanks to <L to="https://scastie.scala-lang.org/" >Scastie</L> as well which allows
                    Tour of Scala to have interactive code snippets.</p>
                <p>And thank you to the members of the discord community for suggesting to build this website.</p>
            </ContentContainer>
        </Top>
        <Nav />
    </Layout>
}