import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useDadJokes = routeLoader$(async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
    });
    const json = await response.json();
    return json as {
        id: string;
        status: number;
        joke: string;
    };
});

export default component$(() => {
    const dadJokesSignal = useDadJokes();
    return (
        <section class="section bright">
            <p>{dadJokesSignal.value.joke}</p>
        </section>
    );
});
