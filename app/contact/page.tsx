export default function Page() {
  return (
    <section>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="space-y-4 max-w-2xl mx-auto"
      >
        <p className="hidden">
          <label>
            Don’t fill this out: <input name="bot-field" className="hidden" />
          </label>
        </p>
        <p>
          <label className="block">
            Your Name{" "}
            <input
              type="text"
              name="name"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </label>
        </p>
        <p>
          <label className="block">
            Your Email{" "}
            <input
              type="email"
              name="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </label>
        </p>
        <p>
          <label className="block">
            Message:{" "}
            <textarea
              name="message"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            ></textarea>
          </label>
        </p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  );
}
