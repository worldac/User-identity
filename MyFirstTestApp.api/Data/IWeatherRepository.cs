using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MyFirstTestApp.api.Data
{
    public interface IWeatherRepository
    {
        Task<bool> AddForecast(WeatherForecast newforecast);

        Task<bool> updateForecast(WeatherForecast forecast, int id );

        Task<bool> DeleteForecast (int id);

        Task<IEnumerable<WeatherForecast>> GetForecasts();
    }
}