import SectionHeader from './section/sectionHeader';
import SectionList from './section/sectionList';

const Page = () =>(
    <div>
        <SectionHeader />
        {/* @ts-expect-error Server Component */}
        <SectionList />
    </div>
)
export default Page;