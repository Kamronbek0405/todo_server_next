import { TodoCard } from "@/components/todo-card";
import { getData } from "@/service/query/get-todo";
import { FormTodo } from "@/components/form-todo";

export default async function Home() {

  const data = await getData()


  return (
    <div className="w-[100%] h-[150vh] flex items-center justify-around  ">
      <div className="bg-[url('https://icon2.cleanpng.com/20191201/vlk/transparent-text-pencil-writing-implement-paper-product-presentatie-science-tribune-copy15e3e63f30a1ac2.7977296515811471230414.jpg')] animate-pulse bg-cover bg-no-repeat w-[500px] h-[500px]">

      </div>

      <div>
        <FormTodo />
        <div>
          {data.map((item) => <TodoCard key={item.id} {...item} />)}
        </div>
      </div>
    </div>
  );
}
