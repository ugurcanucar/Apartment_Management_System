using ApartmentManagementSystem.Entity.Base;
using System;

#nullable disable

namespace ApartmentManagementSystem.Entity.Dto
{
    public   class DtoBill : DtoBase
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int BillTypeId { get; set; }
        public string Card { get; set; }
        public int Value { get; set; }
        public DateTime Date { get; set; }

        public int? PaidValue { get; set; }
        public DateTime? PaidDate { get; set; }
         
    }
}
