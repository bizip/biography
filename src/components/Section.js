import Blog from "./blog";
import Footer from "./Footer";

const Section = () => {
    return (
        <section>
            <div className="section__header">
                <h1>Trust Bizimungu Pascal</h1>
            </div>
            <div className="summary">
                <article >
                    <h2>Trust Bizimungu Pascal</h2>
                    <p>Kabano is an associate at Bytelex advocates,
                        currently stationed in Rwanda. He brings a foreign perspective to the team with his
                        understanding of both Ugandan and Rwandan law. He uses this diverse background to provide legal advice that
                        exceeds borders and takes into account the regional legal status quo in the tech start up space. Kabano’s
                        passion for helping others is what drives his legal career.
                        He holds a Bachelor of Laws degree from Makerere university school of law and a Diploma in Legal practice from the law development centre in Uganda.</p>
                </article>
                <article >
                    <h2>Work Highlights</h2>
                    <ul>
                        <li>Advised Ared Group Limited on their proposed Flip transaction to Delaware state and the resulting corporate restructure.</li>
                        <li>Advised Kian Smith Trade & Co. on structuring their gold-backed digital currency business for operation in Rwanda</li>
                        <li>Part of the legal team engaged by GIZ and Government of Rwanda to facilitate the creation of the Tech Enabled Innovation Policy in Rwanda</li>
                        <li>Advised Kian Smith Trade & Co. on structuring their gold-backed digital currency business for operation in Rwanda</li>
                        <li>Part of the legal team engaged by GIZ and Government of Rwanda to facilitate</li>
                        <li>Part of the legal team engaged by GIZ and Government of Rwanda to facilitate the creation of the Tech Enabled Innovation Policy in Rwanda</li>
                        <li>Formed part of the Team engaged by GIZ (Deutsche Gesellschaft fur Internationale Zusammenarbeit) to facilitate the creation of a Startup Act for Rwanda</li>
                        <li>Engaged by Integrate Health and Trust Law to advise and collaborate on the development of a report on the compensation of community Health workers.</li>
                        <li>Advising MOBICASH Group Ltd on its joint venture arrangement with Rwandan investment co. to commence operations in Rwanda and Nigeria.</li>
                        <li>Engaged by multinational Chemical technology company to advise on and prepare relevant legal documents for its negotiations with foreign chemical suppliers and expansion into the Asian and European chemical engineering Markets.</li>
                    </ul>
                </article>
                <Blog/>
                <Footer />
            </div>
            <div className="profile">

            </div>

        </section>
    )
}
export default Section;