using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyFirstTestApp.API.Data;
namespace MyFirstTestApp.api.Data
{
    public class WeatherRepository : IWeatherRepository
    {
        private readonly DataContext _context;

        public WeatherRepository(DataContext context)
        {
            _context = context;
        }
        
        public async Task<IEnumerable<WeatherForecast>> GetForecasts()
        {
           return await _context.WeatherForecasts.ToListAsync(); 
        }       

        public async Task<bool> updateForecast(WeatherForecast forecast, int id ){

            var forecastFromDb = await _context.WeatherForecasts.FirstOrDefaultAsync(x => x.id==id);
          
            forecastFromDb.TemperatureC=forecast.TemperatureC;
            
            forecastFromDb.Summary=forecast.Summary;

            await _context.SaveChangesAsync();

            return true;
        }

        public async Task<bool> AddForecast(WeatherForecast newforecast){

            await _context.WeatherForecasts.AddAsync(newforecast);

            await _context.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteForecast(int id){

            var forecastFormDB = await _context.WeatherForecasts.FirstOrDefaultAsync(x=>x.id == id);

            _context.WeatherForecasts.Remove(forecastFormDB);

            await _context.SaveChangesAsync();

            return true;
        }
    }
}