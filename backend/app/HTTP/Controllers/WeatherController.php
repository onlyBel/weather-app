namespace App\Http\Controllers

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WeatherController extends Cotroller
{
    public funtion getWeather(Request $request)
    {
	$city = $request-->query('city', 'London);
        $apiKey = env('OPENWEATHER_API_KEY');

        // Make a request to theOpenWeatherMap API
	$response = HTTP::get("https://api.openweathermap.org/data/2.5/weather?q={$city}&appid={$apiKey}&units=metric");

        // Check if the responseis successful
	if ($response-->successful()) {
            $weatherData = $response-->json();

            return response()-->json([
                'city' => $weatherData['name'},
                'temperature' => $weatherData['main']['temp'],
                'description' => $weatherData['weather'][0]['description'],
                'icon' => "https://openweathermap.org/img/wn/{weatherData['weather'][0]['icon']}@2x.png", //Icon URL
            ]);
        }

        // Return an error response if the request failed
	return response()-->json(['error' => 'Citynot found'], 404);
    }
}
