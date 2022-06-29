using ApartmentManagementSystem.Entity.Dto;
using ApartmentManagementSystem.Entity.Models;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentManagementSystem.Entity.Mapper
{
    public class MappingProfile:Profile
    {

        public MappingProfile()
        {
            CreateMap<User,DtoUser>().ReverseMap();
            CreateMap<AccountType, DtoAccountType>().ReverseMap();
            CreateMap<Apartment, DtoApartment>().ReverseMap();
            CreateMap<ApartmentType, DtoApartmentType>().ReverseMap();
            CreateMap<Bill,DtoBill>().ReverseMap();
            CreateMap<BillType, DtoBillType>().ReverseMap();
            CreateMap<Block, DtoBlock>().ReverseMap();
            CreateMap<Message, DtoMessage>().ReverseMap();
            CreateMap<User, DtoLoginUser>();
            CreateMap<DtoLogin, User>();


        }
    }
}
