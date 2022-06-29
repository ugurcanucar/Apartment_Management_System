using ApartmentManagementSystem.Entity.Base;
using System;
using System.Collections.Generic;

#nullable disable

namespace ApartmentManagementSystem.Entity.Models
{
    public class ApartmentType : EntityBase
    {
        public ApartmentType()
        {
            Apartments = new HashSet<Apartment>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Apartment> Apartments { get; set; }
    }
}
