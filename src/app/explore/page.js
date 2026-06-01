import Menu from "@/components/Menu/Menu";
import getTopics from "../lib/getTopics";
import Topic from "@/components/Topic/Topic";

export default function explorePage() {
    const topics = getTopics();
    return (
        <main className="w-4/5 md:w-3/5 flex flex-col justify-center">
            <Menu />
            {Object.entries(topics).map(([topic, count]) => {
                return (     
                    <Topic
                    key={topic}
                    data = {{
                        title: topic,
                        count: count.length
                    }}/>
                );
            })}
        </main>
    );
}