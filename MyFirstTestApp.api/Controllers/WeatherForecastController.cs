using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using MyFirstTestApp.api.Data;
namespace MyFirstTestApp.api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        
        private readonly ILogger<WeatherForecastController> _logger;

        private readonly IWeatherRepository _repo;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, IWeatherRepository repo)
        {
            _repo = repo;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IEnumerable<WeatherForecast>> GetForecasts()
        {
            return await _repo.GetForecasts();
        }       

        [HttpPost("{id}")]
        public async Task<IActionResult> updateForecast(WeatherForecast forecast, int id ){

        await _repo.updateForecast(forecast, id);

            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> AddForecast(WeatherForecast newforecast){
        await _repo.AddForecast(newforecast);
        return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteForecast(int id){
            var forecastFormDB = await _repo.DeleteForecast(id);
            return Ok();
        }
    }
}
