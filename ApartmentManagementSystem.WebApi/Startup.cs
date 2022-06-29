using ApartmentManagementSystem.Bll;
using ApartmentManagementSystem.Dal.Abstract;
using ApartmentManagementSystem.Dal.Concrete.EntityFramework.Context;
using ApartmentManagementSystem.Dal.Concrete.EntityFramework.Repository;
using ApartmentManagementSystem.Dal.Concrete.EntityFramework.UnitOfWork;
using ApartmentManagementSystem.Interface;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentManagementSystem.WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            #region JwtToken


            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(cfg =>
                {
                    cfg.SaveToken = true;
                    cfg.RequireHttpsMetadata = false;

                    cfg.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer=true,
                        ValidateAudience=true,
                        ValidIssuer=Configuration["Tokens:Issuer"],
                        ValidAudience=Configuration["Tokens:Issuer"],
                        IssuerSigningKey=new SymmetricSecurityKey
                        (
                            Encoding.UTF8.GetBytes(Configuration["Tokens:Key"])
                        ),
                        RequireSignedTokens=true,
                        RequireExpirationTime=true,

                    };
                });
            #endregion

            #region ApplicationContext
            services.AddDbContext<APARTMENTMANAGEMENTContext>();
            services.AddScoped<DbContext, APARTMENTMANAGEMENTContext>();

            #endregion

            #region ServicesSection
            services.AddScoped<IUserService, UserManager>();
            services.AddScoped<IAccountTypeService, AccountTypeManager>();
            services.AddScoped<IApartmentService, ApartmentManager>();
            services.AddScoped<IApartmentTypeService, ApartmentTypeManager>();
            services.AddScoped<IBillService, BillManager>();
            services.AddScoped<IBillTypeService, BillTypeManager>();
            services.AddScoped<IBlockService, BlockManager>();
            services.AddScoped<IMessageService, MessageManager>();

            #endregion

            #region RepositorySection
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IAccountTypeRepository, AccountTypeRepository>();
            services.AddScoped<IApartmentRepository, ApartmentRepository>();
            services.AddScoped<IApartmentTypeRepository, ApartmentTypeRepository>();
            services.AddScoped<IBillRepository, BillRepository>();
            services.AddScoped<IBillTypeRepository, BillTypeRepository>();
            services.AddScoped<IBlockRepository, BlockRepository>();
            services.AddScoped<IMessageRepository, MessageRepository>();
            #endregion

            #region UnitOfWork
            services.AddScoped<IUnitOfWork,UnitOfWork>();
            #endregion


            services.AddControllers();
            services.AddSwaggerGen(opt =>
            {
                opt.SwaggerDoc("v1", new OpenApiInfo { Title = "ApartmentManagementSystem.WebApi", Version = "v1" });
                opt.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    In = ParameterLocation.Header,
                    Description = "Please enter token",
                    Name = "Authorization",
                    Type = SecuritySchemeType.Http,
                    BearerFormat = "JWT",
                    Scheme = "bearer"
                });
                opt.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type=ReferenceType.SecurityScheme,
                    Id="Bearer"
                }
            },
            new string[]{}
        }
    });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ApartmentManagementSystem.WebApi v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
