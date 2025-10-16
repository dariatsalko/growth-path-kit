import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Helmet>
        <title>
          Страница не найдена 404 | Центр консультативной психологии «Интенция»
        </title>
        <meta
          name="description"
          content="Страница не найдена. Вернитесь на главную страницу центра консультативной психологии Интенция или воспользуйтесь навигацией сайта."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 font-playfair">404</h1>
        <p className="text-xl text-muted-foreground mb-4">
          Страница не найдена
        </p>
        <p className="text-muted-foreground mb-6">
          Запрашиваемая страница не существует или была перемещена
        </p>
        <a href="/" className="text-primary hover:text-primary/80 underline">
          Вернуться на главную
        </a>
      </div>
    </div>
  );
};

export default NotFound;
