
// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Web;
// using System.ComponentModel.DataAnnotations;
// using System.Data.Entity;

using Microsoft.EntityFrameworkCore;
using MyFirstTestApp.api;
namespace MyFirstTestApp.API.Data


{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options){}
        public DbSet<WeatherForecast> WeatherForecasts {get; set;}
    }
}
